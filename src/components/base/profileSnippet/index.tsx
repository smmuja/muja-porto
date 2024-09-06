import userImg from "assets/img/user.png";
import { profileData } from "data";

export function ProfileSnippet() {
  return (
    <>
      <div className="flex gap-3 items-center">
        <img src={userImg} alt="profile pic" className="size-20 rounded-md" />

        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <h3 className="font-semibold">{profileData.name} (Me)</h3>
            <span className="text-slate-500 text-xs">o</span>
          </div>
          <>
            <p className="font-light">{profileData.role}</p>
          </>
        </div>
      </div>
      <>
        <p className="font-bold mt-5">{profileData.tagline}</p>
      </>
    </>
  );
}
