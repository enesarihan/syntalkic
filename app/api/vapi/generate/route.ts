import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { db } from "@/firebase/admin";

export async function POST(request: Request) {
  const { role, topic, userid, amount } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Prepare interesting and unique questions for a casual conversation.

Generate a completely new and diverse set of questions for each request. Avoid repeating question themes or structures.
The conversation topic is: ${topic}.
The desired number of questions is: ${amount}.
The user wants to engage in a conversation with someone who is a: ${role}.
Generate questions that this person (${role}) would naturally ask, keeping them engaging and varied in type.
Ensure the questions cover a range of conversational styles, including open-ended, thought-provoking, and light-hearted inquiries.
Return only the questions in a JSON array format. Do not include any additional text or explanations.
The questions will be read by a voice assistant, so avoid using any special characters like / or * that could interfere with speech synthesis.
Format the questions as a JSON array: ["Question 1", "Question 2", "Question 3", ...]

Thank you!`,
    });

    const syntalkic = {
      role,
      topic,
      questions: JSON.parse(questions),
      userId: userid,
      finalized: true,
      createdAt: new Date().toISOString(),
    };

    await db.collection("syntalkics").add(syntalkic);

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);

    return Response.json({ success: false, error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ success: true, data: "THANK YOU!" }, { status: 200 });
}
