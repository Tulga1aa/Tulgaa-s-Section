import { Input } from "../components/Input";
import { Button } from "@/components/Button";
import styles from "./LoginSection.module.css";
const LoginSection = () => {
  return (
    <div className={styles.loginSection}>
      Subscribe
      <p>Sign up with your email address to receive news and updates.</p>
      <Input placeholder="First name" />
      <Input placeholder="Last name" />
      <Input placeholder="Email" />
      <Button />
    </div>
  );
};
