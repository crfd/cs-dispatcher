import { db } from '@/config/firebase'
import { uploadFiles } from '@/lib/uploadFile'
import { Feedback } from '@/models'
import { addDoc, collection } from 'firebase/firestore'

async function sendFeedback(feedback: Feedback) {
  const feedbackRef = collection(db, 'feedback')
  const fileRefs = await uploadFiles(feedback.files)

  // TODO: Add the user that sent the feedback
  await addDoc(feedbackRef, {
    createdAt: new Date(),
    name: feedback.name,
    text: feedback.text,
    files: fileRefs.map(fileRef => fileRef.fullPath)
  })
}

export { sendFeedback }
