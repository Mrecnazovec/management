// components/ui/form-element/RichTextEditor.tsx
'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { useEffect } from 'react'
import MenuBar from './MenuBar'

interface RichTextEditorProps {
	value: string
	onChange: (value: string) => void
	disabled?: boolean
}

export function RichTextEditor({ value, onChange, disabled }: RichTextEditorProps) {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				bulletList: {
					HTMLAttributes: {
						class: 'list-disc ml-3',
					},
				},
				orderedList: {
					HTMLAttributes: {
						class: 'list-decimal ml-3',
					},
				},
			}),
			TextAlign.configure({
				types: ['heading', 'paragraph'],
			}),
			Highlight,
		],
		content: value,
		editorProps: {
			attributes: {
				class: 'min-h-[156px] border rounded-md bg-slate-50 py-2 px-3',
			},
		},
		onUpdate: ({ editor }) => {
			onChange(editor.getHTML())
		},
	})

	useEffect(() => {
		if (editor && value !== editor.getHTML()) {
			editor.commands.setContent(value)
		}
	}, [value, editor])

	if (!editor) return null

	return (
		<>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} />
		</>
	)
}
