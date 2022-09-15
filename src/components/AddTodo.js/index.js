import { useFormik } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object({
    addTodo: Yup.string().min(3,'минимум 3 символа').max(20, 'максимум 20 символов').required('обязательное поле')
})

export default function AddTodo({ itemsHandler }) {
    const {values, handleSubmit, handleChange, handleBlur, touched, errors} = useFormik({
        initialValues: {addTodo: ''},
        validationSchema: schema,
        onSubmit: ({addTodo}) => itemsHandler(addTodo)
    })



    return (
        <div className='addTodo'>
            <form onSubmit={handleSubmit} className='addTodo-form'>
                <input
                    value={values.addTodo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='addTodo'
                    id='addTodo'
                    placeholder='введите ToDo'
                    className='addTodo-form__input'
                />
                <button type='submit' className='addTodo-form__btn'>создать ToDo</button>
                {touched.addTodo && errors.addTodo && (
                    <div>{errors.addTodo}</div>
                )}
            </form>
        </div>
    )
}
