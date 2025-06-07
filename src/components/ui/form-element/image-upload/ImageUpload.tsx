import Image from 'next/image'
import { useUpload } from './useUpload'
import { Button } from '../../Button'
import { cn } from '@/lib/utils'
import { ImagePlus } from 'lucide-react'

interface ImageUploadProps {
	isDisabled: boolean
	onChange: (value: string) => void
	value: string
	isPerson?: boolean
	folder: string
}

export function ImageUpload({ isDisabled, onChange, value, isPerson, folder }: ImageUploadProps) {
	const { handleButtonClick, fileInputRef, handleFileChange, isUploading } = useUpload(onChange)

	return (
		<div>
			<div className={cn('grid sm:grid-cols-2 gap-5', { 'sm:grid-cols-4': isPerson })}>
				{value && (
					<div className={cn('relative aspect-[16/9] rounded-2xl overflow-hidden', { 'aspect-[3/4]': isPerson })}>
						<Image src={value} alt='Картинка' fill className='object-cover' />
					</div>
				)}
			</div>
			<Button type='button' disabled={isDisabled || isUploading} onClick={handleButtonClick} className={cn('', { 'mt-4': value.length })}>
				<ImagePlus className='size-4 mr-2' />
				Загрузить картинку
			</Button>
			<input type='file' className='hidden' ref={fileInputRef} onChange={(e) => handleFileChange(e, folder)} disabled={isDisabled || isUploading} />
		</div>
	)
}
