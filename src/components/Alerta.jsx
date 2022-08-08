const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'from-rose-400 to-rose-600' : 'from-yellow-400 to-yellow-600'} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10 `}>
        {alerta.msg}
    </div>
  )
}

export default Alerta