import { useState } from "react";
import Header from "../../components/cient/header";
import Footer from "../../components/cient/footer";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Gửi dữ liệu đến API hoặc xử lý tiếp theo tại đây
  };

  return (
    <div>
        <Header/>
        <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center">Get In Touch With Us</h2>
        <p className="text-gray-500 text-center mb-6">
          For More Information About Our Product & Services, Please Feel Free To Drop Us An Email.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ContactInfo icon="📍" title="Address" details="236 5th SE Avenue, New York NY10000, United States" />
            <ContactInfo icon="📞" title="Phone" details="Mobile: (+84) 546-6789\nHotline: (+84) 456-6789" />
            <ContactInfo icon="⏰" title="Working Time" details="Monday - Friday: 9:00 - 22:00\nSaturday - Sunday: 9:00 - 21:00" />
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField label="Your name" name="name" type="text" value={formData.name} onChange={handleChange} />
            <InputField label="Email address" name="email" type="email" value={formData.email} onChange={handleChange} />
            <InputField label="Subject" name="subject" type="text" value={formData.subject} onChange={handleChange} />
            <TextAreaField label="Message" name="message" value={formData.message} onChange={handleChange} />
            <button type="submit" className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

interface ContactInfoProps {
  icon: string;
  title: string;
  details: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details }) => (
  <div className="flex items-start space-x-3">
    <span className="text-xl">{icon}</span>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600 whitespace-pre-line">{details}</p>
    </div>
  </div>
);

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, value, onChange }) => (
  <div>
    <label className="block text-gray-700 font-bold">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
  </div>
);

interface TextAreaFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-gray-700 font-bold">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    ></textarea>
  </div>
);
