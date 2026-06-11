import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Button } from "./components/ui/button.tsx";
import { ArrowUpRightIcon, CopyIcon, HomeIcon, Undo2Icon } from "lucide-react";
import { Textarea } from "./components/ui/textarea.tsx";

const url = new URL(window.location.href);
const redirect = url.searchParams.get("auto-redirect-to");
const copyText = url.searchParams.get("copy-text");
console.debug(url, redirect, copyText);

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
} else if (copyText && String(copyText).trim() !== "") {
  createRoot(document.getElementById("root")!).render(
    <div className="h-screen w-screen flex flex-col gap-2.5 justify-center items-center">
      <h1 className="max-w-md text-center">Copie o texto abaixo:</h1>
      <Textarea className="max-w-sm w-[75vw]" value={copyText} disabled />
      <div className="flex flex-row gap-2.5">
        <Button
          variant="default"
          className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          onClick={() =>
            navigator.clipboard.writeText(copyText).then(() => {
              alert("Text copiado com sucesso!");
              window.history.back();
              window.close();
            })
          }
        >
          Copiar texto
          <CopyIcon />
        </Button>
        <Button variant="secondary" onClick={() => window.history.back()}>
          Voltar
          <Undo2Icon />
        </Button>
      </div>
    </div>,
  );
} else {
  createRoot(document.getElementById("root")!).render(<App />);
}
