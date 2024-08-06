import DashShopItemCard from 'src/features/shop/DashShopItemCard';
import InputField from 'src/ui/InputField';
import TitleDash from 'src/ui/TitleDash';

function ShopDashPage() {
  return (
    <div className="mx-auto flex w-full max-w-[85rem] flex-col gap-6 overflow-hidden">
      <TitleDash title={'Products list'} animation={'shop'}>
        <InputField size="small" label={'Search Product'} />
      </TitleDash>

      <div className="h-full w-full overflow-auto">
        <div className="flex h-full w-full min-w-[21rem] flex-wrap justify-center gap-4 gap-y-8">
          <DashShopItemCard />
          <DashShopItemCard />
          <DashShopItemCard />
          <DashShopItemCard />
          <DashShopItemCard />
        </div>
      </div>
    </div>
  );
}

export default ShopDashPage;
