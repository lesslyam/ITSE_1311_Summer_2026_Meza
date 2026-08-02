import ReservationForm from "../components/ReservationForm";

function ReservationsPage() {
  return (
    <main className="reservations-page">
      <section className="frenchie-card">
        <h1>Reservations</h1>

        <ReservationForm />
      </section>
    </main>
  );
}

export default ReservationsPage;