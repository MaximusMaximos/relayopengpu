"use client";

import { useState } from "react";

type DeploymentType = "huggingface" | "yaml" | null;

export default function DeployPage() {
  const [step, setStep] = useState<1 | 2>(1);
  const [deploymentType, setDeploymentType] = useState<DeploymentType>(null);
  const [modelName, setModelName] = useState("");
  const [yamlFile, setYamlFile] = useState<File | null>(null);
  const [isDeploying, setIsDeploying] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);

  const popularModels = [
    { name: "Llama-2-7b", path: "meta-llama/Llama-2-7b-hf" },
    { name: "Mistral-7B", path: "mistralai/Mistral-7B-v0.1" },
    { name: "SDXL", path: "stabilityai/stable-diffusion-xl-base-1.0" },
    { name: "Whisper", path: "openai/whisper-large-v3" },
  ];

  const handleDeploy = async () => {
    setIsDeploying(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsDeploying(false);
    setIsDeployed(true);
  };

  const handleReset = () => {
    setStep(1);
    setDeploymentType(null);
    setModelName("");
    setYamlFile(null);
    setIsDeploying(false);
    setIsDeployed(false);
  };

  const handleNext = () => {
    if (step === 1 && deploymentType) {
      setStep(2);
    }
  };

  const canDeploy = 
    (deploymentType === "huggingface" && modelName.trim()) ||
    (deploymentType === "yaml" && yamlFile);

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {!isDeployed ? (
          <>
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-[#0A0F2C] mb-2">
                Deploy Your Workload
              </h1>
              <p className="text-lg text-gray-600">
                We automatically handle GPU selection, scaling, and failover
              </p>
            </div>

            {/* Step 1: Choose Type */}
            {step === 1 && (
              <div className="space-y-6">
                {/* Description Box */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">⚡</div>
                    <div className="flex-1">
                      <div className="font-semibold text-xl text-gray-900">Deploy in Seconds</div>
                      <div className="text-base text-gray-700 mt-2 leading-relaxed">
                        Choose how you want to deploy. OpenGPU automatically finds the optimal GPU, handles scaling, and manages global failover. No GPU selection needed.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deployment Type Selection */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Choose Your Deployment Method</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* HuggingFace Option */}
                    <button
                      onClick={() => setDeploymentType("huggingface")}
                      className={`text-left border-2 rounded-xl p-8 transition-all ${
                        deploymentType === "huggingface"
                          ? "border-[#0A84FF] bg-[#F2F7FF] shadow-lg scale-[1.02]"
                          : "border-gray-200 bg-white hover:border-[#0A84FF] hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">🤗</div>
                        <div className="flex-1">
                          <div className="font-bold text-xl text-gray-900">HuggingFace Model</div>
                          <div className="text-base text-gray-600 mt-2">
                            Fastest way to deploy. Just paste a model name from HuggingFace.
                          </div>
                          <div className="mt-4 text-sm text-gray-500">
                            Perfect for: LLMs, Diffusion models, Audio models
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* YAML Option */}
                    <button
                      onClick={() => setDeploymentType("yaml")}
                      className={`text-left border-2 rounded-xl p-8 transition-all ${
                        deploymentType === "yaml"
                          ? "border-[#0A84FF] bg-[#F2F7FF] shadow-lg scale-[1.02]"
                          : "border-gray-200 bg-white hover:border-[#0A84FF] hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-5xl">📦</div>
                        <div className="flex-1">
                          <div className="font-bold text-xl text-gray-900">Docker Compose</div>
                          <div className="text-base text-gray-600 mt-2">
                            Upload your Docker Compose YAML file for custom containers.
                          </div>
                          <div className="mt-4 text-sm text-gray-500">
                            Perfect for: Custom apps, Complex workflows
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Next Button */}
                <div className="flex justify-end pt-4">
                  <button
                    onClick={handleNext}
                    disabled={!deploymentType}
                    className={`px-10 py-4 rounded-xl text-lg font-semibold transition-all ${
                      deploymentType
                        ? "bg-[#0A84FF] text-white hover:bg-[#0066CC] shadow-lg"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Input Details */}
            {step === 2 && (
              <div className="space-y-6 bg-white rounded-xl p-8 shadow-sm">
                {/* HuggingFace Input */}
                {deploymentType === "huggingface" && (
                  <>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <span>✨</span>
                        <span className="font-medium">We'll automatically configure everything based on your model</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block">
                        <span className="text-base font-bold text-gray-900">HuggingFace Model</span>
                        <span className="text-sm text-gray-500 ml-2">Paste the model path</span>
                      </label>
                      <input
                        type="text"
                        placeholder="meta-llama/Llama-2-7b-hf"
                        value={modelName}
                        onChange={(e) => setModelName(e.target.value)}
                        disabled={isDeploying}
                        className="w-full border-2 border-gray-300 rounded-lg px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#0A84FF] focus:border-transparent disabled:bg-gray-50"
                      />

                      {/* Quick Select */}
                      <div className="space-y-3">
                        <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Popular Models</div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {popularModels.map((model) => (
                            <button
                              key={model.path}
                              onClick={() => setModelName(model.path)}
                              disabled={isDeploying}
                              className="text-sm px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition"
                            >
                              {model.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {modelName && (
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-6">
                        <div className="font-semibold text-gray-900 mb-3">What happens next:</div>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-start gap-2">
                            <span className="text-gray-400">1.</span>
                            <span>Analyze <span className="font-medium">{modelName.split('/')[1]}</span> requirements</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-gray-400">2.</span>
                            <span>Find optimal GPU with right VRAM & availability</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-gray-400">3.</span>
                            <span>Set up global routing and failover</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="text-gray-400">4.</span>
                            <span>Deploy and generate your API endpoint</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* YAML Upload */}
                {deploymentType === "yaml" && (
                  <>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center gap-2">
                        <span>✨</span>
                        <span className="font-medium">We'll parse your YAML and find the best GPUs automatically</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <label className="block">
                        <span className="text-base font-bold text-gray-900">Docker Compose YAML</span>
                        <span className="text-sm text-gray-500 ml-2">Upload your compose file</span>
                      </label>
                      
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-[#0A84FF] transition">
                        <input
                          type="file"
                          accept=".yaml,.yml"
                          onChange={(e) => setYamlFile(e.files?.[0] || null)}
                          className="hidden"
                          id="yaml-upload"
                        />
                        <label htmlFor="yaml-upload" className="cursor-pointer">
                          <div className="text-6xl mb-4">📄</div>
                          {yamlFile ? (
                            <div>
                              <div className="text-lg font-semibold text-gray-900">{yamlFile.name}</div>
                              <div className="text-sm text-gray-500 mt-1">
                                {(yamlFile.size / 1024).toFixed(1)} KB
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div className="text-lg font-semibold text-gray-700">Click to upload YAML file</div>
                              <div className="text-sm text-gray-500 mt-1">
                                or drag and drop
                              </div>
                            </div>
                          )}
                        </label>
                      </div>

                      {yamlFile && (
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mt-6">
                          <div className="font-semibold text-gray-900 mb-3">What happens next:</div>
                          <div className="space-y-2 text-gray-600">
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">1.</span>
                              <span>Parse your Docker Compose configuration</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">2.</span>
                              <span>Detect resource requirements automatically</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">3.</span>
                              <span>Find GPUs that meet your specs</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-gray-400">4.</span>
                              <span>Deploy with automatic scaling and failover</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between pt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="text-base text-[#0A84FF] hover:underline font-semibold"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleDeploy}
                    disabled={!canDeploy || isDeploying}
                    className={`px-10 py-4 rounded-xl text-lg font-bold transition-all ${
                      isDeploying
                        ? "bg-[#0A84FF] text-white cursor-wait"
                        : canDeploy
                        ? "bg-[#0A84FF] text-white hover:bg-[#0066CC] shadow-lg"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {isDeploying ? (
                      <span className="flex items-center gap-3">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Deploying...
                      </span>
                    ) : (
                      "Deploy"
                    )}
                  </button>
                </div>

                <div className="text-center pt-4">
                  <div className="text-xl font-bold text-green-600">
                    Free for Q1 2026
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Beta access • No credit card required
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* Success Screen */
          <div className="bg-white rounded-xl p-10 shadow-sm space-y-8">
            <div className="text-center space-y-5">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-full">
                <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Deployment Successful!</h2>
                <p className="text-lg text-gray-600 mt-3">
                  {deploymentType === "huggingface" 
                    ? `${modelName.split('/')[1]} is now running on the OpenGPU network`
                    : "Your container is now running on the OpenGPU network"
                  }
                </p>
              </div>
            </div>

            <div className="border-2 border-gray-100 rounded-xl p-6 bg-gradient-to-br from-gray-50 to-white">
              <div className="font-bold text-gray-900 mb-4">✨ Handled automatically:</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <span>Analyzed requirements and selected optimal GPU</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <span>Configured multi-region failover</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <span>Set up automatic scaling</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <span>Generated your API endpoint</span>
                </div>
              </div>
            </div>

            <div>
              <div className="font-bold text-gray-900 mb-3">Your endpoint:</div>
              <div className="bg-gray-900 text-green-400 p-5 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-gray-500 mb-2"># Make a request</div>
                {deploymentType === "huggingface" ? (
                  <>
                    <div>curl https://api.opengpu.network/run \</div>
                    <div className="ml-4">-H "Authorization: Bearer YOUR_KEY" \</div>
                    <div className="ml-4">-d '{`{"model":"${modelName}","prompt":"Hello"}`}'</div>
                  </>
                ) : (
                  <>
                    <div>curl https://api.opengpu.network/your-service \</div>
                    <div className="ml-4">-H "Authorization: Bearer YOUR_KEY"</div>
                  </>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
                <div className="font-bold text-3xl text-green-700">$0</div>
                <div className="text-sm text-green-600 mt-1 font-medium">Idle cost</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                <div className="font-bold text-3xl text-blue-700">Auto</div>
                <div className="text-sm text-blue-600 mt-1 font-medium">GPU picked</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100">
                <div className="font-bold text-3xl text-purple-700">Global</div>
                <div className="text-sm text-purple-600 mt-1 font-medium">Failover</div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handleReset}
                className="flex-1 bg-gray-100 text-gray-700 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
              >
                Done
              </button>
              <button
                onClick={handleReset}
                className="flex-1 bg-[#0A84FF] text-white py-4 rounded-xl text-lg font-semibold hover:bg-[#0066CC] transition"
              >
                Deploy Another →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}