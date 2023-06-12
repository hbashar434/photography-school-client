import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Shared/Loading/Loading";
import useStudent from "../hooks/useStudent";

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isStudent, isStudentLoading] = useStudent();
  const location = useLocation();

  if (loading || isStudentLoading) {
    return <Loading />;
  }

  if (user && isStudent) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;
