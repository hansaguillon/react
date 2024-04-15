export const Buscador = ({onSubmit,onChange,valorInput}) => {

    return (
        <form className="form-buscador" onSubmit={onSubmit}>
        <input className="buscador" value={valorInput} onChange={e => onChange(e)}></input>
        </form>
    )



}