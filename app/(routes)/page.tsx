import getBillboard from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("060f33ac-1dbf-44b5-a5b4-07be0fa0cd5b");
  const product = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList items={product} title="Featured Products" />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
