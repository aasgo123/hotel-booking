export class Booking {
    BookingId: number;
    UserId: number;
    HotelId: number;
    RoomId: number;
    BookingDate: Date = new Date();
    ArrivalDate: Date = new Date();
    DepartureDate: Date = new Date();
    PaymentStatus: string;
    NoOfGuests: number;
    UserRating: number;
}
