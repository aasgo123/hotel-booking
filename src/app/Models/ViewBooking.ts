export class ViewBooking
{
   BookingId: number;
  UserId: number;
  HotelId: number;
  HotelName: string;

  HotelCity: string;

  BookingDate: Date;
   ArrivalDate: Date;
   DepartureDate: Date;
   // tslint:disable-next-line: ban-types
   PaymentStatus: boolean;
  NoOfGuests: number;
}
