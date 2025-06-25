import { IBookingResponse } from "@travelia/api/types/response.dto";
import jsPDF from "jspdf";
import formatDateTime from "./formatDateTime";

export const generateOrderPDF = (data: IBookingResponse) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.setTextColor(40, 40, 40);
  doc.text("Booking Confirmation", 20, 25);

  doc.setDrawColor(0);
  doc.line(20, 30, 190, 30);

  doc.setFontSize(12);
  doc.setTextColor(80, 80, 80);
  doc.text(`Customer Name: ${data.customerName}`, 20, 45);
  doc.text(`Confirmation No: ${data.confirmationNumber}`, 20, 55);
  doc.text(`Booking Status: ${data.bookingStatus}`, 20, 65);

  doc.text(`Hotel Name: ${data.hotelName}`, 20, 80);
  doc.text(`Room Number: ${data.roomNumber}`, 20, 90);
  doc.text(`Room Type: ${data.roomType}`, 20, 100);
  doc.text(`Booking Date: ${formatDateTime(data.bookingDateTime)}`, 20, 110);
  doc.text(`Payment Method: ${data.paymentMethod}`, 20, 120);

  doc.setFontSize(14);
  doc.setTextColor(0, 128, 0);
  doc.text(`Total Cost: $${data.totalCost}`, 20, 140);

  doc.setFontSize(11);
  doc.setTextColor(120, 120, 120);
  doc.text(
    "Thank you for choosing our service. We wish you a pleasant stay!",
    20,
    160,
  );

  doc.save(`Order_${data.confirmationNumber}.pdf`);
};
