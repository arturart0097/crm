import { Tab } from "@headlessui/react";

import { CodeViewer } from "@/components/UI/CodeViewer";

import "./style.css";

export const RightPanel = ({ code, assets }) => {
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
                <CodeViewer code={code} />
              </pre>
              <div className="panel-gradient" />
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="panel">
              <iframe
                title={`game`}
                srcDoc={code}
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
                {assets.map((img) => (
                  <img src={img} loading="lazy" alt="assets" />
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
