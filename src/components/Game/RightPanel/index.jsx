import { Tab } from "@headlessui/react";

import { CodeViewer } from "@/components/UI/CodeViewer";

import "./style.css";

function normalizeCodeBlock(input) {
  return input.replace(/^```html\s*/m, "").replace(/\s*```$/m, "");
}

export const RightPanel = ({ code, assets }) => {
  const normalizeCode = normalizeCodeBlock(code);

  return (
    <div className="right-panel">
      <Tab.Group>
        <Tab.List className="tabs">
          <Tab className={({ selected }) => `tab ${selected ? "active" : ""}`}>
            Code
          </Tab>
          <Tab className={({ selected }) => `tab ${selected ? "active" : ""}`}>
            Game Preview
          </Tab>
          <Tab className={({ selected }) => `tab ${selected ? "active" : ""}`}>
            Assets
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="panel">
              <pre className="code-block">
                <CodeViewer code={normalizeCode} />
              </pre>
              <div className="panel-gradient" />
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="panel">
              <iframe
                title={`game`}
                srcDoc={normalizeCode}
                sandbox="allow-scripts"
                style={{
                  width: "100%",
                  height: 800,
                  borderRadius: 12,
                }}
                loading="lazy"
              />
              <div className="panel-gradient" />
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="panel">
              <div className="assets-block">
                {Array.isArray(assets) &&
                  assets.length > 0 &&
                  assets.map((src, i) => (
                    <img
                      key={src || i}
                      src={typeof src === "string" ? src : src?.url || src?.src}
                      loading="lazy"
                      decoding="async"
                      alt="asset"
                    />
                  ))}
              </div>
              <div className="panel-gradient" />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
