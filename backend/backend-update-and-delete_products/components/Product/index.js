import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import ProductForm from "../ProductForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  const [isEditMode, setIsEditMode] = useState(false);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  // new handleEditProduct

  async function handleEditProduct(productData) {
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (response.ok) {
      mutate();
      setIsEditMode(false);
    } else {
      console.error("Failed to update product:", response.status);
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error("Failed to delete product:", response.status);
    }
  }

  return (
    <ProductCard>
      {isEditMode ? (
        <ProductForm
          onSubmit={handleEditProduct}
          heading={`Edit Product: ${data.name}`}
          product={data}
        />
      ) : (
        <>
          <h2>{data.name}</h2>
          <p>Description: {data.description}</p>
          <p>
            Price: {data.price} {data.currency}
          </p>
          {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
          <button
            type="button"
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          >
            {isEditMode ? "Cancel Edit" : "Edit Product"}
          </button>
          <button type="button" onClick={handleDeleteProduct}>
            Delete Product
          </button>
          <StyledLink href="/">Back to all</StyledLink>
        </>
      )}
    </ProductCard>
  );
}
