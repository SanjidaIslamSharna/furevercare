import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    if (!name) return toast.error("Name is required");
    setLoading(true);
    try {
      await updateUserProfile(name, photo);
      toast.success("Profile updated successfully!");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <div className="flex flex-col items-center gap-4 mb-4">
        <img src={photo || `https://via.placeholder.com/80/60AEA0/FFFFFF?text=${name.slice(0,2).toUpperCase()}`} alt="avatar" className="w-20 h-20 rounded-full object-cover" />
      </div>

      <div className="flex flex-col gap-3">
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border px-3 py-2 rounded" />
        <input type="text" placeholder="Photo URL" value={photo} onChange={e => setPhoto(e.target.value)} className="border px-3 py-2 rounded" />
        <input type="email" placeholder="Email" value={user?.email} disabled className="border px-3 py-2 rounded bg-gray-100" />
      </div>

      <button onClick={handleUpdate} disabled={loading} className="mt-4 w-full bg-[#60AEA0] text-white px-4 py-2 rounded hover:bg-[#378982]">
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </div>
  );
};

export default Profile;
