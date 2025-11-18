import {
    FieldValues,
    SubmitHandler,
    UseFormReturn
} from "react-hook-form"

export function handleSubmit<
    TFieldValues extends FieldValues
> (
    form: UseFormReturn<TFieldValues>,
    onSubmit: SubmitHandler<TFieldValues>
) {
    return form.handleSubmit((values, event) => {
        if (event !== undefined) event.preventDefault()
        return onSubmit(values)
    })
}
