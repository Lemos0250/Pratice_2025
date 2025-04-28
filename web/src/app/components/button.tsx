interface ButtonProps {
    text?: string
}

export function Button(props: ButtonProps) {
    return (
    <button className="px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl">
        {props.text || 'Enviar'}
    </button>
    )
}