"use client";

import { useEffect, useState } from "react";
import jsPDF from "jspdf";
import { LANGUAGES } from "../lib/languages";


export default function TranscriptPage() {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState("");
  const [translatedSummary, setTranslatedSummary] = useState("");

  const [selectedLang, setSelectedLang] = useState("english");
  const [loadingTranslate, setLoadingTranslate] = useState(false);

  useEffect(() => {
    setTranscript(localStorage.getItem("transcript") || "");
    setSummary(localStorage.getItem("summary") || "");
  }, []);

  const handleDownloadPDF = () => {
    const doc = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });

    const margin = 15;
    let y = margin;

    doc.setFontSize(18);
    doc.text("Transcript Report", margin, y);
    y += 10;

    doc.setFontSize(14);
    doc.text("Transcript:", margin, y);
    y += 8;

    const transcriptLines = doc.splitTextToSize(transcript, 180);
    doc.setFontSize(11);
    doc.text(transcriptLines, margin, y);

    y += transcriptLines.length * 6 + 10;

    doc.setFontSize(14);
    doc.text("Summary:", margin, y);
    y += 8;

    const summaryLines = doc.splitTextToSize(summary, 180);
    doc.setFontSize(11);
    doc.text(summaryLines, margin, y);

    if (translatedSummary) {
      y += summaryLines.length * 6 + 10;
      doc.setFontSize(14);
      doc.text("Translated Summary:", margin, y);
      y += 8;

      const translatedLines = doc.splitTextToSize(translatedSummary, 180);
      doc.setFontSize(11);
      doc.text(translatedLines, margin, y);
    }

    doc.save("transcript.pdf");
  };

  const splitIntoParagraphs = (text: string): string[] => {
    if (!text) return [];
    if (text.length < 600) return [text.trim()];

    const sentences = text.split(/(?<=[.?!])\s+/);
    const paragraphs: string[] = [];
    let current = "";

    for (const s of sentences) {
      current += s + " ";
      if (current.length > 1000) {
        paragraphs.push(current.trim());
        current = "";
      }
    }

    if (current.trim()) paragraphs.push(current.trim());
    return paragraphs;
  };

  const renderParagraphs = (text: string) =>
    splitIntoParagraphs(text).map((p, i) => (
      <p key={i} className="text-sm text-gray-700 mb-4 leading-relaxed text-justify indent-8">
        {p}
      </p>
    ));

  const handleTranslate = async () => {
    setLoadingTranslate(true);

    const formData = new FormData();
    formData.append("summary", summary);
    formData.append("target_language", selectedLang);

    const res = await fetch(
      "https://tzzzzzzzzzzzzzzzzzz-quicknote-be.hf.space/resummarize", 
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    setTranslatedSummary(data.summary);

    setLoadingTranslate(false);
  };

  return (
    <div className="bg-gradient-to-b from-sky-200 to-white min-h-screen w-screen overflow-y-auto p-10">
      <div className="min-h-full bg-white/90 backdrop-blur-sm shadow-lg rounded-3xl overflow-visible">
        <div className="flex flex-col min-h-full">

          {/* Navbar */}
          <div className="bg-gradient-to-b from-blue-500 to-purple-600 p-4 flex flex-row items-center justify-between">
            <a
              href="/quicknote/upload"
              className="bg-white/20 rounded-xl text-white px-4 py-2 text-sm hover:bg-white/30 transition"
            >
              Back
            </a>

            <h2 className="text-white font-semibold">Transcript</h2>

            <div />
          </div>

          {/* Main Content */}
          <div className="flex-1 p-10 flex items-center justify-center">
            <div className="w-full max-w-4xl">

              <h1 className="text-2xl text-center font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                Your Transcript is Ready
              </h1>

              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">

                {/* TRANSCRIPT */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Transcript</h3>
                {renderParagraphs(transcript)}

                {/* SUMMARY TITLE */}
                <h3 className="text-lg font-semibold text-gray-800 mt-8 mb-3">Summary</h3>
                {renderParagraphs(summary)}

                {/* TRANSLATED SUMMARY */}
                {translatedSummary && (
                  <div className="mt-10">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Translated Summary ({selectedLang})
                    </h3>
                    {renderParagraphs(translatedSummary)}
                  </div>
                )}

                {/* BUTTON BAR */}
                <div className="flex justify-between items-center mt-10">

                  {/* LEFT: Download PDF */}
                  <button
                    onClick={handleDownloadPDF}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow"
                  >
                    Download PDF
                  </button>

                  {/* RIGHT: Dropdown + Translate */}
                  <div className="flex gap-3 items-center">
                    <select
  className="w-full p-3 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-indigo-500"
  value={selectedLang}
  onChange={(e) => setSelectedLang(e.target.value)}
>
  {Object.entries(LANGUAGES)
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([code, name]) => (
      <option key={code} value={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </option>
    ))}
</select>


                    <button
                      onClick={handleTranslate}
                      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow"
                    >
                      {loadingTranslate ? "Translating..." : "Translate"}
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
