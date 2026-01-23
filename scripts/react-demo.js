// React Feature Panel Demo
// Demonstrates state-driven UI, conditional rendering,
// feature flags, and basic React fundamentals.
console.log("reactdemo.js is working");
function FeaturePanel() {
  const [features, setFeatures] = React.useState({
    authentication: false,
    apiIntegration: true,
    darkMode: false,
  });

  const fakeApiData = ["Users", "Orders", "Analytics"];

  const toggleFeature = (key) => {
    setFeatures((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={features.darkMode ? "dark-panel" : ""}>
      <h2>Component-Based UI (React Demo)</h2>
      <p>
        This demo showcases React components, state management,
        conditional rendering, and feature-driven UI behavior.
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {Object.entries(features).map(([key, enabled]) => (
          <li
            key={key}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              borderRadius: "8px",
              background: enabled ? "#c6d4d4" : "#6b818b",
              color: enabled ? "#29302f" : "#ccc",
              transition: "all 0.3s ease",
            }}
          >
            <strong>
              {key === "authentication" && "Authentication"}
              {key === "apiIntegration" && "API Integration"}
              {key === "darkMode" && "Dark Mode"}
            </strong>

            <p>
              Status: {enabled ? "Enabled" : "Disabled"}</p>

            <button
              className="btn"
              onClick={() => toggleFeature(key)}
              style={{ marginBottom: "0.5rem" }}
            >
              {enabled ? "Works!" : "Doesn't Work"}
            </button>

            {/* Feature-specific behavior */}
            {enabled && key === "authentication" && (
              <p style={{ fontSize: "0.9rem"}}>
                Protected content is now accessible.
              </p>
            )}

            {enabled && key === "apiIntegration" && (
              <div style={{ fontSize: "0.9rem" }}>
                <p>Data fetched from API:</p>
                <ul>
                  {fakeApiData.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {enabled && key === "darkMode" && (
              <p style={{ fontSize: "0.9rem" }}>
                Dark mode is applied to this panel.
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Render the React app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FeaturePanel />);
