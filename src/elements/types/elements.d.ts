export interface IInputProps {
  label: string
  type: 'password' | 'text' | 'email' | 'number' | 'tel' | 'time' | 'url'
  name?: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  disabled?: boolean
  className?: string
}
