import { useParams, useSearchParams } from 'react-router-dom'
import './style.css'

export const Post = () => {
  const { id } = useParams()
  const [qs] = useSearchParams()

  return (
    <div>
      <h1>Post { id } { qs }</h1>
    </div>
  )
}