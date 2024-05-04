import SigninLayout from '@/component/template/SigninLayout';
import SigninForm from '@/component/organism/SigninFrom';

export default function SigninPage() {
  return (
    <SigninLayout>
      <main>
        <SigninForm />
      </main>
    </SigninLayout>
  );
}
