import { db } from '@/config/firebase'
import { uploadFiles } from '@/lib/uploadFile'
import { Feedback } from '@/models'
import { addDoc, collection } from 'firebase/firestore'

async function sendFeedback(feedback: Feedback) {
  const feedbackRef = collection(db, 'feedback')
  const fileRefs = await uploadFiles(feedback.files)

  await addDoc(feedbackRef, {
    createdAt: new Date(),
    name: feedback.name,
    text: feedback.text,
    files: fileRefs
  })
}

export { sendFeedback }
