import { storage } from '@/config/firebase'
import { ref, StorageReference, uploadBytes } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'

/**
 * The function uploads a single file to the Firebase storage. When successfull
 * the function returns a reference to the file.
 *
 * @param file The file that should be uploaded.
 * @param id An optional id of the file. When none is set a random id is generated.
 * @returns The reference to the file in storage.
 */
async function uploadFile(
  file: File,
  id: string | undefined = undefined
): Promise<StorageReference> {
  const fileId = id ?? uuidv4()
  const fileRef = ref(storage, `files/${fileId}`)

  await uploadBytes(fileRef, file)

  return fileRef
}

interface FileWithOptionalId {
  id: string | undefined
  file: File
}

/**
 * Provides an way to upload multiple files to the Firebase storage. This
 * function allows to upload files with an optional id.
 *
 * @param files An object with both the file and an optional id.
 * @returns An array of references to the files in storage.
 */
async function uploadFilesWithOptionalId(
  files: FileWithOptionalId[]
): Promise<StorageReference[]> {
  const refs: StorageReference[] = []
  for (const file of files) {
    refs.push(await uploadFile(file.file, file.id))
  }
  return refs
}

async function uploadFiles(files: File[]): Promise<StorageReference[]> {
  return uploadFilesWithOptionalId(files.map(file => ({ file, id: undefined })))
}

export { uploadFile, uploadFilesWithOptionalId, uploadFiles }
