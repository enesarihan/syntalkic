import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { db } from "@/firebase/admin";

export async function POST(request: Request) {
  const { role, topic, userid, amount } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Prepare interesting and unique questions for a casual conversation.
        And Question must be random every request please.
            The conversation topic is: ${topic}.
            The desired amount of questions is: ${amount}.
            The user wants to talk to someone who is a: ${role}.
            Please generate questions that this person (${role}) would ask, and keep them engaging and varied.
            Please return only the questions, without any additional text.
            The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
            Return the questions formatted like this:
            ["Question 1", "Question 2", "Question 3"]
            
            Thank you! <3`,
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
  }
}

export async function GET() {
  return Response.json({ success: true, data: "THANK YOU!" }, { status: 200 });
}
