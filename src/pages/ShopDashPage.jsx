import ShopList from 'src/features/shop/ShopList';
import InputField from 'src/ui/InputField';
import TitleDash from 'src/ui/TitleDash';

function ShopDashPage() {
  return (
    <div className="mx-auto flex w-full max-w-[85rem] flex-col gap-6 overflow-hidden">
      <TitleDash title={'Products list'} animation={'shop'}>
        <InputField size="small" label={'Search Product'} />
      </TitleDash>

      <div className="h-full w-full overflow-auto">
        <ShopList type="dash" />
      </div>
    </div>
  );
}

export default ShopDashPage;
