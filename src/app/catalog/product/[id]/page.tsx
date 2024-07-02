interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps) {
  const [ProductId, size, color] = params.data

  return (
    <div>
      <p>Produc: {ProductId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </div>
  )
}
