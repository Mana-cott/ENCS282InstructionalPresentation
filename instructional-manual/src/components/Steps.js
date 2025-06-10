import { useState } from 'react';
import './Steps.css';

function Steps() {
  const [resetType, setResetType] = useState(null);
  const [reinstallType, setReinstallType] = useState(null);

  return (
    <section className="Steps">
      <h2>Steps</h2>
      <div id="open-settings">
        <h3>Open Settings</h3>
        <p>In this step, you will open the Windows settings menu, which contains the options required for the factory reset. To go to the settings, follow these steps:</p>
        <ol>
          <li>Click on the Start menu or press the Windows logo key on your keyboard.</li>
          <li>Click on the Settings gear icon, or search “settings” in the search bar and select it from the results.</li>
        </ol>
        <figure className="step-image">
          <img src="./images/settings_open.png" alt="Windows 11 settings typed into search bar" />
          <figcaption>Search “Settings” in the Start menu</figcaption>
        </figure>
      </div>
      <div id="go-to-recovery">
        <h3>Go to Recovery</h3>
        <p>Now that you are inside the Settings menu, you will need to access the Recovery section where the reset options are located. To do that, follow these steps:</p>
        <ol>
          <li>In the left-hand sidebar, click on <strong>System</strong> (if it is not already selected).</li>
          <li>Scroll down on the right pane and click on <strong>Recovery</strong>.</li>
        </ol>
        <figure className="step-image">
          <img src="./images/recovery_open.png" alt="Windows 11 settings system recovery option hover" />
          <figcaption>Select “Recovery” in the Settings System sub-menu</figcaption>
        </figure>
        <figure className="step-image">
          <img src="./images/recovery_page.png" alt="Windows 11 settings system recovery option page" />
          <figcaption>“Recovery” options open in Settings</figcaption>
        </figure>
      </div>
      <div id="start-the-reset">
        <h3>Start the Reset</h3>
        <p>Once you are in the Recovery section, you can begin the factory reset process.</p>
        <ol>
          <li>Under <strong>Recovery options</strong>, locate the section titled <strong>Reset this PC</strong>.</li>
          <li>Click on the Reset PC button to launch the reset wizard.
            <span className="caution">Caution: Make sure to back up any important files before proceeding, as this process may remove personal data.</span>
          </li>
        </ol>
      </div>
      <div id="choose-reset-option">
        <h3>Keep or Remove Files</h3>
        <p>Upon the reset wizard opening you will be shown a blue menu screen to select if you wish to keep or remove your personal files when enacting the factory reset.</p>
        <figure className="step-image">
          <img src="./images/remove_or_keep.png" alt="Windows 11 wizard remove or keep" />
          <figcaption>Reset Wizard remove or keep personal files option</figcaption>
        </figure>
        <div className="reset-choice">
          <p>Choose your reset type:</p>
          <button onClick={() => setResetType('keep')} className={resetType === 'keep' ? 'active' : ''}>
            Keep My Files
          </button>
          <button onClick={() => setResetType('remove')} className={resetType === 'remove' ? 'active' : ''}>
            Remove Everything
          </button>
        </div>
        {resetType === 'keep' && (
          <div className="step-detail">
            <h4>Keep My Files</h4>
            <p>This option reinstalls Windows while preserving your personal files.</p>
            <ol>
              <li>Select <strong>Keep my files</strong> when prompted.</li>
              <li>Windows will remove apps and settings, but keep personal files.</li>
            </ol>
          </div>
        )}

        {resetType === 'remove' && (
          <div className="step-detail">
            <h4>Remove Everything</h4>
            <p>This option fully resets Windows and deletes all your personal files, apps, and settings.</p>
            <ol>
              <li>Select <strong>Remove everything</strong> when prompted.</li>
              <li>All personal files will now be deleted upon the factory reset.</li>
            </ol>
          </div>
        )}
      </div>
      <div id="cloud-or-local-reinstall">
        <h3>Cloud or Local Reinstallation</h3>
        <p>A new screen will now be available to choose the method of Windows 11 reinstallation. This option affects which Windows 11 version the factory reset will turn your computer into as well as how the version is retrieved.</p>
        <figure className="step-image">
          <img src="./images/reinstall_options.png" alt="Windows 11 reinstallation options" />
          <figcaption>Reset Wizard reinstall options</figcaption>
        </figure>
        <div className="reset-choice">
          <p>Choose your reinstall type:</p>
          <button onClick={() => setReinstallType('cloud')} className={resetType === 'cloud' ? 'active' : ''}>
            Cloud
          </button>
          <button onClick={() => setReinstallType('local')} className={resetType === 'local' ? 'active' : ''}>
            Local
          </button>
        </div>
        {reinstallType === 'cloud' && (
          <div className="step-detail">
            <h4>Cloud Reinstallation</h4>
            <p>This option reinstalls Windows 11 using the latest version available from Microsoft's cloud servers.</p>
            <ul>
              <li>Ensures you recieve a clean, uncorrupted version of Windows 11.</li>
              <li>Reinstallation times may take significantly longer, as the OS (Operating System) is downloaded by internet.</li>
              <li>An intenet connection is required for this option.</li>
            </ul>
          </div>
        )}

        {reinstallType === 'local' && (
          <div className="step-detail">
            <h4>Local Reinstallation</h4>
            <p>This option reinstalls Windows 11 using local files available on your device or from a separate USB drive.</p>
            <ul>
              <li>Files can come from your computer or an external USB key.</li>
              <li>There is a higher risk of future system corruption compared to a cloud install.</li>
              <ul>
                <li>Current Windows installation and factory reset instructions may be corrupted.</li>
                <li>External USB drive provided also poses risk of being corrupted.</li>
              </ul>
              <li>Factory reset times are significantly shorter.</li>
              <li>No internet connection is required.</li>
            </ul>

          </div>
        )}
      </div>
      <div id="confirm-and-reset">
        <h3>Confirm and Reset</h3>
        <p>Another pane will then be opened for the option to change any previous settings, with the option to continue, go back or cancel the factory reset all together.</p>
        <figure className="step-image">
          <img src="./images/additional_settings.png" alt="Factory Reset Additional Settings Menu" />
          <figcaption>Reset Wizard Additional Settings Menu</figcaption>
        </figure>
        <ol>
          <li>Select <strong>next</strong> to confirm factory reset.</li>
          <li>A "getting things ready ... this won't take long" loading screen will display.</li>
          <figure className="step-image">
            <img src="./images/point_of_no_return.png" alt="Factory Reset Finalization Menu" />
            <figcaption>Reset Wizard Finalization Menu</figcaption>
          </figure>
          <li>Select <strong>Reset</strong></li>
          <li>Now Windows will prepare to reset with another loading screen.</li>
          <li>Your computer will then be reset by Windows.</li>
          <li>Your computer itself will now load with varying load times depending on the settings you chose for your factory reset.</li>
          <li>A new Windows 11 initialization screen will become available.</li>
          <li>Your system has now been factory resetted.</li>
        </ol>
      </div>
    </section>
  );
}

export default Steps;
