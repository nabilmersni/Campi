import ItemDetailLayout from 'src/features/userSide/ItemDetailLayout';
import GaloryCarousel from 'src/ui/GaloryCarousel';

function EventDetailsPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <ItemDetailLayout>
        <div className="flex w-full flex-col items-center gap-3">
          <GaloryCarousel />d
        </div>

        {/*  */}
        <div>hello</div>
      </ItemDetailLayout>
    </div>
  );
}

export default EventDetailsPage;
