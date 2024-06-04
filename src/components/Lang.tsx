"use client";
import { NextPageContext } from "next";
import useLanguageSwitcher, {
  LanguageDescriptor,
} from "../hooks/useLanguageSwitcher";
import React from "react";

export type LanguageSwitcherProps = {
  context?: NextPageContext;
};

export const LanguageSwitcher = ({ context }: LanguageSwitcherProps = {}) => {
  const { currentLanguage, switchLanguage, languageConfig } =
    useLanguageSwitcher({ context });

  if (!languageConfig) {
    return null;
  }

  return (
    <div className="text-left notranslate flex flex-col">
      {languageConfig.languages.map((ld: LanguageDescriptor, i: number) => (
        <React.Fragment key={ld.name}>
          {currentLanguage === ld.name ||
          (currentLanguage === "auto" &&
            languageConfig.defaultLanguage === ld.name) ? (
            <span className="mx-3 text-energy">{ld.title}</span>
          ) : (
            <a
              onClick={switchLanguage(ld.name)}
              className="mx-3 text-resilience cursor-pointer hover:text-growth hover:no-underline"
            >
              {ld.title}
            </a>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
