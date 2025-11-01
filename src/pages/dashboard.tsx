import React from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Calendar,
  CheckCircle,
  Plane,
  Clock,
  XCircle,
  LogOut,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext.tsx";
import Navbar from "../Top/navbar.jsx";
import Footer from "../Top/footer";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";

function Dashboard() {
  const navigate = useNavigate();
  const { token } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/");
    window.location.reload();
  };

  // Données simulées
  const userInfo = {
    prenom: "Jean",
    nom: "Rakoto",
    email: "jean.rakoto@example.com",
    memberSince: "2022",
  };

  const stats = {
    totalReservations: 12,
    reservationsActives: 0,
  };

  const reservations = [
    {année : "2022", reservation : 3},
    {année : "2023", reservation : 5},
    {année : "2024", reservation : 3},
    {année : "2025", reservation : 1},
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmé":
        return "bg-green-100 text-green-800";
      case "En attente":
        return "bg-orange-100 text-orange-800";
      case "Annulé":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Confirmé":
        return <CheckCircle className="text-green-600" size={20} />;
      case "En attente":
        return <Clock className="text-orange-600" size={20} />;
      case "Annulé":
        return <XCircle className="text-red-600" size={20} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 pt-20 pb-10">
        {/* HEADER */}
        <header className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white py-12 px-6 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <div className="bg-white/20 p-5 rounded-full">
                <User size={48} />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Bienvenue, {userInfo.prenom} </h1>
                <p className="text-gray-200">
                  Membre depuis {userInfo.memberSince}
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-5 py-3 rounded-full font-semibold transition-all"
            >
              <LogOut size={20} />
              Déconnexion
            </button>
          </div>
        </header>

        {/* STATISTIQUES */}
        <section className="max-w-7xl justify-center mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {[
            {
              title: "Total Réservations",
              value: stats.totalReservations,
              icon: <Calendar className="text-blue-600" size={30} />,
            },
            {
              title: "Réservations Actives",
              value: stats.reservationsActives,
              icon: <CheckCircle className="text-green-600" size={30} />,
            },
           
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-600">
                  {item.title}
                </h3>
                {item.icon}
              </div>
              <p className="text-4xl font-bold text-gray-900">{item.value}</p>
            </div>
          ))}
        </section>

        {/* GRAPHIQUES */}
        <section className="max-w-7xl mx-auto mt-12 px-6 ">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Réservations par années
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={reservations}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="année" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="reservation" fill="#3b82f6" name="reservations" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>


        {/* DERNIÈRES RÉSERVATIONS */}
        <section className="max-w-7xl mx-auto mt-16 px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Dernières Réservations
          </h2>

          <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                type: "Vol",
                destination: "Paris",
                date: "2025-05-15",
                montant: "850€",
                status: "Confirmé",
                icon: Plane,
              },
            ].map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.id}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 p-4 rounded-xl">
                        <Icon className="text-blue-600" size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {r.type} — {r.destination}
                        </h3>
                        <p className="text-gray-600">{r.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">
                        {r.montant}
                      </p>
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                          r.status
                        )}`}
                      >
                        {getStatusIcon(r.status)} {r.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Dashboard;
