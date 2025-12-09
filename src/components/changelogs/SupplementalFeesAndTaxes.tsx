'use client';

import React from 'react';

export const SupplementalFeesAndTaxesChangelog: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Design System Alignment Callout */}
      <section className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
          <span className="text-lg">ℹ️</span>
          Design System Alignment
        </h4>
        <p className="text-blue-800 leading-relaxed mb-3">
          Please note that while this prototype demonstrates the intended functionality and user experience, 
          there may be visual discrepancies between the designs shown here and Canary's production UI components.
        </p>
        <p className="text-blue-800 leading-relaxed mb-3">
          When implementing these features, always reference and utilize the closest matching components from 
          our official design system. This ensures consistency across our platform and maintains our 
          established design patterns.
        </p>
        <p className="text-blue-800">
          For implementation, please refer to our{' '}
          <a 
            href="https://62d9cefcbe6110617cd23826-gxhiiskfdw.chromatic.com/?path=/docs/canary-ui-canaryinputcurrency--docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 underline font-medium"
          >
            Canary UI Storybook
          </a>
          {' '}for the latest component specifications and usage guidelines.
        </p>
      </section>

      {/* Overview Section */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Overview</h3>
        <p className="text-gray-600 leading-relaxed">
          The Settings page in F&B Ordering has been enhanced with a unified fees and taxes management system. 
          This update allows hotel operators to configure flexible pricing structures with validation, 
          real-time editing, persistent storage, and a live guest pricing preview.
        </p>
      </section>

      {/* Fees and Taxes Configuration Section */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Fees and Taxes Configuration</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Unified Interface</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Combined Section:</strong> Fees and taxes are now managed in a single "Fees and taxes" section</li>
              <li><strong>Two-Column Layout:</strong> Left side for configuration tables, right side for live guest preview</li>
              <li><strong>Consistent Styling:</strong> White background with Canary design system shadow for the preview panel</li>
              <li><strong>Optimized Column Widths:</strong> Fee/Tax label fields reduced to 124px for better space utilization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Supplemental Fees Section */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Supplemental Fees</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Core Features</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Fee Label:</strong> Required text field for naming the fee (e.g., "Delivery fee", "Service charge")</li>
              <li><strong>Fee Type:</strong> Dropdown selector with two options:
                <ul className="list-circle list-inside ml-6 mt-1">
                  <li>Flat fee - Fixed dollar amount (displays with $ prefix)</li>
                  <li>Percentage - Percentage of subtotal (displays with % suffix)</li>
                </ul>
              </li>
              <li><strong>Amount:</strong> Numeric input that formats automatically with thousand separators for flat fees</li>
              <li><strong>Taxable:</strong> Checkbox to indicate if tax should be applied to this fee</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Table Behaviors</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Empty State:</strong> Shows "No supplemental fees" message in a subtle gray box</li>
              <li><strong>Add Fee:</strong> Blue button that immediately adds an editable row to the table</li>
              <li><strong>Inline Editing:</strong> All fields are directly editable without modal dialogs</li>
              <li><strong>Delete Action:</strong> Three-dot menu on each row reveals delete option</li>
              <li><strong>Reordering (v2):</strong> Sorting/reordering of fees is de-scoped for v1 but may be introduced in a future release</li>
              <li><strong>Animations:</strong> Smooth fade/scale transitions between empty and populated states</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Validation Rules</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Fee label cannot be empty</li>
              <li>Amount cannot be $0.00 or 0%</li>
              <li>Amount field prevents double zeros (00 → 0)</li>
              <li>Automatic formatting with commas for thousands</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Taxes Section */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Taxes</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Core Features</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Tax Label:</strong> Required text field for tax name (e.g., "Sales tax", "City tax")</li>
              <li><strong>Rate:</strong> Percentage input field (e.g., "8.5" for 8.5%)</li>
              <li><strong>Apply To:</strong> Dropdown with calculation options:
                <ul className="list-circle list-inside ml-6 mt-1">
                  <li>Subtotal only - Tax calculated on item subtotal only</li>
                  <li>Subtotal + fees - Tax calculated on subtotal plus supplemental fees</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Table Interactions</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Empty State:</strong> Shows "No taxes" message similar to fees section</li>
              <li><strong>Add Tax:</strong> Blue button adds new editable tax row</li>
              <li><strong>Multiple Taxes:</strong> Support for multiple tax types with different rates</li>
              <li><strong>Delete Action:</strong> Three-dot menu for removing individual taxes</li>
              <li><strong>Reordering (v2):</strong> Sorting/reordering of taxes is de-scoped for v1 but may be introduced in a future release</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Validation Rules</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Tax label cannot be empty</li>
              <li>Rate cannot be 0%</li>
              <li>Rate must be a valid number</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Guest Price Breakdown Preview */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Guest Price Breakdown Preview</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Dynamic Preview Panel</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Real-time Updates:</strong> Shows live calculations as fees and taxes are configured</li>
              <li><strong>Fixed Width:</strong> 260px panel positioned to the right of configuration tables</li>
              <li><strong>Default State:</strong> Shows only Subtotal ($100), divider, and Total when no fees/taxes configured</li>
              <li><strong>Visual Design:</strong> White background with shadow effect matching Canary design system</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Calculation Order</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>1. Subtotal:</strong> Static $100.00 base amount (always shown)</li>
              <li><strong>2. Taxes (Subtotal Only):</strong> Taxes applied only to the subtotal</li>
              <li><strong>3. Taxable Fees:</strong> Fees marked as taxable (included in subtotal+fees tax calculations)</li>
              <li><strong>4. Taxes (Subtotal + Fees):</strong> Taxes applied to subtotal plus taxable fees</li>
              <li><strong>5. Non-Taxable Fees:</strong> Fees not subject to tax calculations</li>
              <li><strong>6. Total:</strong> Sum of all above items (always shown with divider)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Calculation Logic</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Percentage fees calculated as percentage of subtotal</li>
              <li>Flat fees use exact dollar amounts entered</li>
              <li>Taxes on "Subtotal + fees" include all taxable fees in calculation base</li>
              <li>Non-taxable fees are excluded from all tax calculations</li>
              <li>All amounts displayed with two decimal places</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Save Button Behavior */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Save Button Behavior</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Button States</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li><strong>Disabled (Gray):</strong> No changes detected from initial/saved state</li>
              <li><strong>Enabled (Blue):</strong> Changes detected and all validations pass</li>
              <li><strong>Position:</strong> Top-right of Settings header, flush with content edge</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Validation on Save</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Validates all fees and taxes before saving</li>
              <li>Shows individual error toasts for each validation failure</li>
              <li>Prevents save until all errors are resolved</li>
              <li>Success toast confirms when settings are saved</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">Change Detection</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Tracks all field modifications in real-time</li>
              <li>Compares current values with last saved state</li>
              <li>Includes prep time, all fees, and all taxes in change detection</li>
              <li>Resets change state after successful save</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Persistence */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Persistence</h3>
        <div className="space-y-2">
          <p className="text-gray-600">Settings are saved to browser localStorage with the following keys:</p>
          <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
            <div className="text-gray-700">settings_prepTime</div>
            <div className="text-gray-700">settings_fees</div>
            <div className="text-gray-700">settings_taxes</div>
          </div>
          <p className="text-gray-600 mt-2">
            Data persists across browser sessions and is loaded automatically when the Settings tab is accessed.
          </p>
        </div>
      </section>

      {/* Implementation Notes */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Implementation Notes</h3>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <ul className="space-y-2 text-blue-900">
            <li>• Uses CanaryUI components for consistent design system</li>
            <li>• Drag-and-drop reordering de-scoped for v1 (may be added in future release)</li>
            <li>• Toast notifications require parent component to pass onShowToast callback</li>
            <li>• All monetary values stored as strings to preserve formatting</li>
            <li>• Percentage values stored without % symbol (e.g., "8.5" not "8.5%")</li>
          </ul>
        </div>
      </section>
    </div>
  );
};