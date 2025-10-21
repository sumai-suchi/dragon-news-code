import SocialButton from "../SocialButton";
import SocialLinks from "../SocialLinks";

const RightAside = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold text-center">Login with</h1>
      <SocialButton></SocialButton>
      <SocialLinks></SocialLinks>
    </div>
  );
};

export default RightAside;
