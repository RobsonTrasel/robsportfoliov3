import axios from "axios";
import { SendMailProps } from '../interface/interfaces';

export const sendContactEmail = async ({ name, senderMail, content }: SendMailProps) => {
  const data = {
    name, senderMail, content
  }

  try {
    return await axios.post('/api/contact', data)
  } catch (e) {
    return e
  }
}