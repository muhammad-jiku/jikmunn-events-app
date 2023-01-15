import path from 'path';
import fs from 'fs';

function buildPath() {
  return path.join(process.cwd(), 'data', 'data.json');
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;

  const filePath = buildPath();
  const data = extractData(filePath);
  const { events_categories, allEvents } = data;

  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: 'Events data is not found',
    });
  }

  if (method === 'POST') {
    const { email, eventId } = req.body;

    if (!email | !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address' });
    }

    const newAllEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res
            .status(409)
            .json({ message: 'This email has already been registered' });
          return event;
        }
        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        };
      }
      return event;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(200).json({
      message: `${email} has been registered a ticket successfully for ${eventId}! event.`,
      email,
    });
  }
}
