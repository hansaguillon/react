export const Gif = ({gif}) => {
    return (
        <img className="gif"  src={gif.images.original.url} alt={gif.title}></img>
    )
  


}