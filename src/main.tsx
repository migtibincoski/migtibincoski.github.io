import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Button } from "./components/ui/button.tsx";
import { ArrowUpRightIcon, HomeIcon } from "lucide-react";

const url = new URL(window.location.href);
const redirect = url.searchParams.get("auto-redirect-to");
if (redirect && String(redirect).trim() !== "") {
  const urls = {
    homepage: "https://migtibincoski.is-a.dev/",
    call: "tel:+5548999999999",
    mail: "mailto:contact@migtibincoski.is-a.dev",
  } as const;

  const urlToRedirect = urls[redirect as keyof typeof urls];
  if (urlToRedirect) {
    createRoot(document.getElementById("root")!).render(
      <div className="h-screen w-screen flex flex-col gap-2.5 justify-center items-center">
        <h1 className="max-w-md text-center">
          Caso você não seja redirecionado automaticamente,
        </h1>
        <div className="flex flex-row gap-2.5">
          <Button
            variant="default"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <a href={urlToRedirect} target="_blank" rel="noopener noreferrer">
              Clique aqui
            </a>
            <ArrowUpRightIcon />
          </Button>
          <Button
            variant="secondary"
            onClick={() => window.location.replace(urls.homepage)}
          >
            Voltar ao início
            <HomeIcon />
          </Button>
        </div>
      </div>,
    );
    window.location.replace(urlToRedirect);
  } else {
    createRoot(document.getElementById("root")!).render(
      <div className="h-screen w-screen flex flex-col gap-2.5 justify-center items-center">
        <h1 className="max-w-md text-center">
          URL de redirecionamento inválida.
        </h1>
        <div className="flex flex-row gap-2.5">
          <Button
            variant="secondary"
            onClick={() => window.location.replace(urls.homepage)}
          >
            Voltar ao início
            <HomeIcon />
          </Button>
        </div>
      </div>,
    );
  }
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}
